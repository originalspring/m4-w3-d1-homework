import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

// ● We have the MessageComponent that renders the value of the msg prop onto the screen.
// ● In our test, which is in the callback we pass into it , we call shallowMount to mount the
// component without its children.
// ● propsData lets us pass the prop data we need for the test.
// ● Then the wrapper.text() method returns the rendered text.
// ● And we use toMatch to check the results.

const MessageComponent = {
  template: '<p>{{ msg }}</p>',
  props: ['msg']
};

describe('MessageComponent', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(MessageComponent, {
      propsData: {msg}
    });
    expect(wrapper.text()).toMatch(msg);
  });
});