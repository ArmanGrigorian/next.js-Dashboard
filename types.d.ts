type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

type Layout = {
  children: React.ReactNode;
};
type SearchParams = {
  searchParams: {
    query: string;
    page: string;
  };
};
type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};
type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};
type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  status: 'pending' | 'paid';
};
type Revenue = {
  month: string;
  revenue: number;
};
type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};
type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};
type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};
type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};
type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};
type CustomerField = {
  id: string;
  name: string;
};
type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};
