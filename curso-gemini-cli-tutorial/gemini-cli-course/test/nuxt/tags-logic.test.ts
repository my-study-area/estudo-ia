import { describe, it, expect, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Create from '../../app/pages/create.vue'

describe('CreatePage Tags Logic', () => {
  it('should not allow more than 5 tags', async () => {
    const wrapper = await mountSuspended(Create)
    const input = wrapper.find('#tags')

    // Add 5 tags
    await input.setValue('tag1, tag2, tag3, tag4, tag5,')
    
    // Try to add 6th tag
    await input.setValue('tag6,')

    const pills = wrapper.findAll('.tag-pill')
    expect(pills.length).toBe(5)
    expect(pills.map(p => p.text())).not.toContain('tag6')
  })

  it('should not allow duplicate tags', async () => {
    const wrapper = await mountSuspended(Create)
    const input = wrapper.find('#tags')

    await input.setValue('tag1, tag1,')

    const pills = wrapper.findAll('.tag-pill')
    expect(pills.length).toBe(1)
    expect(pills[0].text()).toBe('tag1')
  })

  it('should remove a tag when clicking the X icon', async () => {
    const wrapper = await mountSuspended(Create)
    const input = wrapper.find('#tags')

    await input.setValue('tag1, tag2,')
    
    let pills = wrapper.findAll('.tag-pill')
    expect(pills.length).toBe(2)

    await pills[0].find('.tag-pill-icon').trigger('click')

    pills = wrapper.findAll('.tag-pill')
    expect(pills.length).toBe(1)
    expect(pills[0].text()).toBe('tag2')
  })
  
  it('should add remaining input as tag on submit', async () => {
    const wrapper = await mountSuspended(Create)
    const consoleSpy = vi.spyOn(console, 'log')

    await wrapper.find('#foodOne').setValue('Food1')
    await wrapper.find('#foodTwo').setValue('Food2')
    await wrapper.find('#description').setValue('Desc')
    await wrapper.find('#tags').setValue('tag1, tag2') // tag2 is not followed by comma

    await wrapper.find('form').trigger('submit.prevent')

    expect(consoleSpy).toHaveBeenCalledWith('New Combo Data:', expect.objectContaining({
      tags: ['tag1', 'tag2']
    }))
  })
})
