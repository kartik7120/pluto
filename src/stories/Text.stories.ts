import type { Meta, StoryObj } from "@storybook/react"
import Text from "../components/Text"

const meta: Meta<typeof Text> = {
    title: "Text",
    component: Text,
    argTypes: {
        variant: {
            defaultValue: "base",
            description: "This value is used to define which type of text to render",
            type: "string",
            control: { type: "radio" },
            options: ['base', 'h1', 'h2', 'h3', "code", "lead", "large", "small", "muted", "italic"]
        },
        children: {
            defaultValue: "Sometimes Pluto is closer to The Sun than Neptune",
            description: "Text that goes as a children in the text component",
            type: "string",
        }
    },
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof Text>;

export const Base: Story = {
    args: {
        variant: "base"
    }
}

export const H1: Story = {
    args: {
        variant: "h1"
    }
}

export const H2: Story = {
    args: {
        variant: "h2"
    }
}

export const H3: Story = {
    args: {
        variant: "h3"
    }
}

export const Code: Story = {
    args: {
        variant: "code"
    }
}

export const Lead: Story = {
    args: {
        variant: "lead"
    }
}

export const Large: Story = {
    args: {
        variant: "large"
    }
}

export const Small: Story = {
    args: {
        variant: "small"
    }
}

export const Muted: Story = {
    args: {
        variant: "muted"
    }
}

export const Italic: Story = {
    args: {
        variant: "italic"
    }
}