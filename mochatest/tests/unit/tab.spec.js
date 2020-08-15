import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Tab from '@/components/tab.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).to.include(msg)
//   })
// })

describe('Tab.vue', () => {
  it('检测tab.vue是否被正常渲染', () => {
    // const msg = 'new message'
    const wrapper = shallowMount(Tab, {
      propsData: { 
        tabs:[
          {
            title: 'tab111'
          },{
            title:'tab222'
          }
        ]
       }
    })
    console.log(wrapper)
    expect(wrapper.contains('.item')).to.equal(true);
  })
})