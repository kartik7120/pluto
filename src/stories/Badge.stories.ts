import Badge from "../components/Badge";
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Badge> = {
    title: "Badge",
    component: Badge,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            defaultValue: "Badge",
            description: "Text that will reside inside the badge",
            control: { type: "text" }
        },
        variant: {
            options: ["primary", "secondary", "tertiary", "error", "dark"],
            control: { type: "radio" }
        },
        size: {
            options: ['sm', 'md', 'lg', 'xl', undefined],
            control: {
                type: "radio"
            }
        }
    },
}

export default meta;

type Story = StoryObj<typeof Badge>

export const Primary: Story = {
    args: {
        children: "Badge",
        variant: "primary"
    },
    parameters: {
        backgrounds: {
            default: "dark"
        },
    }
}

export const Secondary: Story = {
    args: {
        children: "Badge",
        variant: "secondary",
    }
}

export const Tertiary: Story = {
    args: {
        children: "Badge",
        variant: "tertiary",
    }
}

export const Error: Story = {
    args: {
        children: "Badge",
        variant: "error",
    }
}

export const Dark: Story = {
    args: {
        children: "Badge",
        variant: "dark",
    }
}