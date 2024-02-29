import { 
  Banner,
  BlockStack, 
  Page,
  Text, 
  reactExtension, 
  useApi } from '@shopify/ui-extensions-react/customer-account';

export default reactExtension(
  "customer-account.page.render",
  () => <FullPageExtension />
);

function FullPageExtension() {
  const { extension, i18n } = useApi();

  return (
    <Page title={i18n.translate('fullPageTitle')}>
      <BlockStack>
        <Banner>{i18n.translate('welcome', {target: extension.target})}</Banner>
        <Text size="extraSmall">THIS IS FULL PAGE</Text>
        <Text size="extraLarge">THIS IS FULL PAGE</Text>
      </BlockStack>
    </Page>
  )
}