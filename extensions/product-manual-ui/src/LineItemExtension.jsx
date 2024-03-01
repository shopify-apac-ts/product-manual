import { 
  reactExtension, 
  Link,
  useAppMetafields,
  useTarget,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  "customer-account.order-status.cart-line-item.render-after",
  () => <LineItemExtension />
);

function LineItemExtension() {

  // Get product ID of this target
  const {
    merchandise: {product},
  } = useTarget();
  const product_id = product.id.replace('gid://shopify/Product/', '');

  // Get PDF links in product metafields
  const pdf = useAppMetafields({
    type: 'product',
    namespace: 'custom',
    key: 'pdf',
  });
  console.log('pdf', pdf);

  // Copy PDF link of matching product ID
  var _pdfstr = '';
  for (const item of pdf) {
    if (item.target.id === product_id) {
      _pdfstr = item.metafield?.value;
      console.log('pdfstr of ', product_id, _pdfstr);
      break;
    }
  }

  // Clean up PDF link
  const pdfstr = _pdfstr.slice(2, -2);
//  console.log('pdfstr', pdfstr);

  return(
    <Link to={pdfstr} external={true}>CLICK HERE FOR INSTRUCTION</Link>
    );
}

