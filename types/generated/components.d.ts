import type { Schema, Attribute } from '@strapi/strapi';

export interface AccordItemsAccordItems extends Schema.Component {
  collectionName: 'components_accord_items_accord_items';
  info: {
    displayName: 'accordItems';
  };
  attributes: {
    title: Attribute.String;
    descr: Attribute.RichText;
  };
}

export interface AccordeonContentAccordeonContent extends Schema.Component {
  collectionName: 'components_accordeon_content_accordeon_contents';
  info: {
    displayName: 'accordeonContent';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    accordTitle: Attribute.String;
    accordItems: Attribute.Component<'accord-items.accord-items', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'accord-items.accord-items': AccordItemsAccordItems;
      'accordeon-content.accordeon-content': AccordeonContentAccordeonContent;
    }
  }
}
