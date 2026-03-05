import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AvatarCircle from '../../app/components/AvatarCircle.vue';

describe('AvatarCircle', () => {
  it('renders the initial correctly', () => {
    const wrapper = mount(AvatarCircle, {
      props: {
        initial: 'A',
        bgColor: 'primary'
      }
    });
    expect(wrapper.text()).toBe('A');
  });

  it('applies the primary background color class', () => {
    const wrapper = mount(AvatarCircle, {
      props: {
        initial: 'B',
        bgColor: 'primary'
      }
    });
    expect(wrapper.classes()).toContain('bg-primary');
  });

  it('applies the secondary background color class', () => {
    const wrapper = mount(AvatarCircle, {
      props: {
        initial: 'C',
        bgColor: 'secondary'
      }
    });
    expect(wrapper.classes()).toContain('bg-secondary');
  });

  it('renders as a circle', () => {
    const wrapper = mount(AvatarCircle, {
      props: {
        initial: 'D',
        bgColor: 'accent'
      }
    });
    expect(wrapper.classes()).toContain('avatar-circle');
  });
});
