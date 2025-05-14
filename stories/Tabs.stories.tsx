import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs'
import { RiCalculatorLine, RiMapPin2Line } from '@remixicon/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Tabs> = {
  title: 'ui/Tabs',
  component: Tabs,
  parameters: {},
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Returns</TabsTrigger>
        <TabsTrigger value="tab2">Shipping</TabsTrigger>
      </TabsList>
      <div className="mt-4 ml-2">
        <TabsContent value="tab1" className="text-cnt-secondary space-y-2 text-sm leading-7">
          <p>
            You have 60 days from the time we've shipped your order to return any part of it to us
            for a refund, provided it is still in its original, unused condition: we do not accept
            returns of used items.
          </p>
          <p>
            No return authorization (RMA) is required. If you are within the United States, a
            pre-paid shipping label will be generated. For direct returns, a flat fee of $10 is
            deducted from your return for shipping and processing costs.
          </p>
        </TabsContent>
        <TabsContent value="tab2" className="text-cnt-secondary space-y-2 text-sm leading-7">
          <p>
            We ship worldwide via UPS Expedited. We offer flat rate shipping to customers in Canada
            ($30), the EU, Japan, and Singapore ($45–$65+), and Australia ($65). Note that most
            brokerage fees are included in the price of UPS Expedited shipping, with the exception
            of a possible $10 fee assessed in Canada only if prior arrangements to pay for duties
            and taxes are not made (see next question and answer).
          </p>
          <p>
            Outside of the United States, tariffs, duties, and taxes are the responsibility of the
            customer and are usually paid at time of delivery.
          </p>
        </TabsContent>
      </div>
    </Tabs>
  ),
}
