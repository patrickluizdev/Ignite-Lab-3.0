import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default {
  title: 'Components/Heading',
  component: Heading,
  args:{
    children: "Lorem Ipsun",
    size: 'sm'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg' ],
      control: {
        type: 'inline-radio'
      } 
    }
  }
} as Meta <HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
  args:{
    size: 'md'
  }
}
export const Large: StoryObj<HeadingProps> = {
  args:{
    size: 'lg'
  }
}

export const CustonComponent: StoryObj<HeadingProps> = {
  args:{
    asChild: true,
    children: (
      <h1>Loren Ipsun with H1 tag</h1>
    )
  },
  argTypes:{
    children:{
      table: {
        disable: true,
      }
    },
    asChild:{
      table: {
        disable: true,
      }
    }
  }
}