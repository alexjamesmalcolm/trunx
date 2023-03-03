"use client"
import { Button, Column, Columns, Message, bulma } from "trunx"
import { Code, PageSection } from "@/components"
import { indent } from "@/helpers/utils/indent"

export default function Example() {
  return (
    <PageSection title="How it works">
      <p>
        Trunx React components wrap Bulma CSS classes. For example, import <code>Button</code> component.
      </p>

      <Code>
        {indent`
          import { Button } from "trunx";
        `}
      </Code>

      <Columns isMultiline>
        <Column size="full">
          <p>This button</p>

          <Button color="primary" size="large">
            Push me
          </Button>
        </Column>

        <Column>
          <p>is created by this JSX code</p>

          <Code>
            {indent`
              <Button
                color="primary"
                size="large"
              >Push me</Button>
            `}
          </Code>
        </Column>

        <Column>
          <p>which is equivalent to</p>

          <Code>{indent`
            <button
              className="is-primary is-large"
            >Push me</button>
          `}</Code>
        </Column>
      </Columns>

      <p>
        You can also use <code>bulma</code> helper if some feature or HTML tag is not implemented by Trunx.
      </p>

      <Code>
        {indent`
          import { bulma } from "trunx";
        `}
      </Code>

      <Columns isVcentered>
        <Column>
          <Code>
            {indent`
          You are <strong className={bulma("has-text-success")}>successful</strong>!
        `}
          </Code>
        </Column>

        <Column>
          You are <strong className={bulma("has-text-success")}>successful</strong>!
        </Column>
      </Columns>

      <Message color="info">
        Many Trunx components accept a <code>className</code> prop which will be appended to Bulma classes
        in order to customize the component style.
      </Message>
    </PageSection>
  )
}
