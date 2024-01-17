import Label from "../components/Label";
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Label> = {
    title: "Label",
    component: Label,
    argTypes: {
        children: {
            control: {
                type: "text"
            }
        },
        variant: {
            control: {
                type: "select",
                options: ["primary", "error", "success", "muted"]
            }
        },
        required: {
            control: {
                type: "boolean"
            }
        }
    },
    tags: ['autodocs']
}

export default meta;
type Story = StoryObj<typeof Label>;

export const Primary: Story = {
    args: {
        variant: "primary",
        children: "Enter your name"
    },
}

export const Secondary: Story = {
    args: {
        variant: "secondary",
        children: "Enter your name"
    },
    parameters: {
        backgrounds: {
            default: "dark"
        },
    }
}

export const Error: Story = {
    args: {
        variant: "error",
        children: "Enter your name"
    }
}

export const Success: Story = {
    args: {
        variant: "success",
        children: "Enter your name"
    }
}

export const Muted: Story = {
    args: {
        variant: "muted",
        children: "Enter your name"
    }
}
