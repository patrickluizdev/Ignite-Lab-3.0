import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
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
} as Meta <TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
  args:{
    size: 'md'
  }
}
export const Large: StoryObj<TextProps> = {
  args:{
    size: 'lg'
  }
}

export const CustonComponent: StoryObj<TextProps> = {
  args:{
    asChild: true,
    children: (
      <a>Loren Ipsun Link</a>
    )
  },
  argTypes:{
    children:{
      table: {
        disable: true,
      }
    }
  }
}