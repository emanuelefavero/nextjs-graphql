import { BackButton } from '@/components/header/back-button'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

// * Metadata
const meta = {
  title: 'components/header/BackButton',
  component: BackButton,
  tags: ['autodocs'],
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        // Mock a non-root pathname so the component renders in Storybook
        // ? The component returns null if the pathname is '/'
        pathname: '/not-home',
      },
    },
  },
} satisfies Meta<typeof BackButton>

export default meta

// * Stories
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithGhostVariant: Story = {
  args: {
    variant: 'ghost',
  },
}

export const WithClassName: Story = {
  args: {
    className: 'bg-red-500/25',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const OnHomePage: Story = {
  args: {},
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        // The component should not render in the home page
        pathname: '/',
      },
    },
  },
}
