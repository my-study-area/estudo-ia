import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { BookOpen } from 'lucide-vue-next';
import FeatureCard from '../../app/components/FeatureCard.vue';
import ComboCard from '../../app/components/ComboCard.vue';

describe('FeatureCard', () => {
  it('renders the title and description correctly', () => {
    const wrapper = mount(FeatureCard, {
      props: {
        icon: BookOpen,
        title: 'Test Title',
        description: 'Test Description'
      }
    });
    expect(wrapper.find('h3').text()).toBe('Test Title');
    expect(wrapper.find('p').text()).toBe('Test Description');
  });
});

describe('ComboCard', () => {
  it('renders the title, description and tags correctly', () => {
    const wrapper = mount(ComboCard, {
      props: {
        title: 'Combo Title',
        description: 'Combo Description',
        tags: ['Tag1', 'Tag2']
      }
    });
    expect(wrapper.find('h4').text()).toBe('Combo Title');
    expect(wrapper.find('.combo-description').text()).toBe('Combo Description');
    const tags = wrapper.findAll('.tag');
    expect(tags).toHaveLength(2);
    expect(tags[0].text()).toBe('Tag1');
    expect(tags[1].text()).toBe('Tag2');
  });
});
