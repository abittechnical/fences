import Link from 'next/link'
import { Block, CodeBlock, parseRoot } from 'codehike/blocks'
import { highlight, Pre, RawCode } from 'codehike/code'
import { Selectable, Selection, SelectionProvider } from 'codehike/utils/selection'
import { z } from 'zod'

import { tokenTransitions } from '@/components/code/annotations/token-transitions'

import Content from './content.mdx'

const Schema = Block.extend({
  intro: Block,
  steps: z.array(Block.extend({ code: CodeBlock })),
  outro: Block,
})

export default function Page() {
  const { intro, steps, outro } = parseRoot(Content, Schema)
  return (
    <main>
      <Link href="/">Back</Link>
      <h1 className="mt-8">{intro.title}</h1>
      {intro.children}
      <SelectionProvider className="flex gap-4">
        <div className="prose prose-invert mt-32 mb-[90vh] ml-2 flex-1">
          {steps.map((step, i) => (
            <Selectable
              key={i}
              index={i}
              selectOn={['click', 'scroll']}
              className="mb-24 rounded border-l-4 border-zinc-700 bg-zinc-900 px-5 py-2 data-[selected=true]:border-blue-400"
            >
              <h2 className="mt-4 text-xl">{step.title}</h2>
              <div>{step.children}</div>
            </Selectable>
          ))}
        </div>
        <div className="w-[40vw] max-w-xl bg-zinc-900">
          <div className="sticky top-4 overflow-auto">
            <Selection
              from={steps.map((step) => (
                <Code codeblock={step.code} />
              ))}
            />
          </div>
        </div>
      </SelectionProvider>
      <h2>{outro.title}</h2>
      {outro.children}
    </main>
  )
}

async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, 'github-dark')
  return (
    <Pre
      code={highlighted}
      handlers={[tokenTransitions]}
      className="min-h-[40rem] bg-transparent"
    />
  )
}
