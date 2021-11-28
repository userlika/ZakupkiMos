import * as React from 'react';
import {useState} from 'react';
import './distribution.css';
import TableHeader from '../table-header/table-header';
import DistributionItemNews from '../distribution-item-news/distribution-item-news';
import DistributionItemRegData from '../distribution-item-reg-data/distribution-item-reg-data';
import DistributionItemPartInTenders from '../distribution-item-part-in-tenders/distribution-item-part-in-tenders';
import DistributionItemContractRelations
  from '../distribution-item-contract-relations/distribution-item-contract-relations';
import DistributionItemSpecSubsc from '../distribution-item-spec-subsc/distribution-item-spec-subsc';
import DistributionItemCustomersSuppliers
  from '../distribution-item-customers-suppliers/distribution-item-customers-suppliers';
import DistributionItemKeywordsSubscribe
  from '../distribution-item-keywords-subscribe/distribution-item-keywords-subscribe';
import DistributionItemSte from '../distribution-item-ste/distribution-item-ste';

export default function Distribution() {

  return (
    <>
      <TableHeader />
      <DistributionItemNews />
      <DistributionItemRegData />
      <DistributionItemPartInTenders />
      <DistributionItemContractRelations />
      <DistributionItemSpecSubsc />
      <DistributionItemCustomersSuppliers />
      <DistributionItemKeywordsSubscribe />
      <DistributionItemSte />
    </>
  );
}
