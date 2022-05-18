import { ProductLine, Invoice } from './types'

export const initialProductLine: ProductLine = {
  description: '',
  quantity: '1',
  rate: '0.00',
}

export const initialInvoice: Invoice = {
  logo: '',
  logoWidth: 100,
  title: 'INVOICE',
  companyName: 'Nicolas Funke',
  name: '',
  companyAddress: '23 Nonohe Pl',
  companyAddress2: 'Paia, HI, 96779',
  companyCountry: 'United States',
  billTo: 'Bill To:',
  clientName: 'Léon & George',
  clientAddress: '1250 Long Beach Ave Unit 327',
  clientAddress2: 'Los Angeles, CA 90021',
  clientCountry: 'United States',
  invoiceTitleLabel: 'Invoice#',
  invoiceTitle: '',
  invoiceDateLabel: 'Invoice Date',
  invoiceDate: '',
  invoiceDueDateLabel: 'Due Date',
  invoiceDueDate: '',
  productLineDescription: 'Item Description',
  productLineQuantity: 'Qty',
  productLineQuantityRate: 'Rate',
  productLineQuantityAmount: 'Amount',
  productLines: [
    {
      description: 'Frontend Hours',
      quantity: '48',
      rate: '50',
    },
    {
      description: 'Backend Hours',
      quantity: '40',
      rate: '50',
    },
  ],
  subTotalLabel: 'Sub Total',
  taxLabel: 'Sale Tax',
  totalLabel: 'TOTAL',
  currency: '$',
  notesLabel: 'Notes',
  notes: 'Maintainer work from ',
  termLabel: 'Terms & Conditions',
  term: 'Please make the payment by the due date.',
}
