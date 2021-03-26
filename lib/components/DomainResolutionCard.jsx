import { Card } from 'lib/components/Card'
import { InputLabel } from 'lib/components/InputLabel'
import { TextInputGroup, TextInputGroupType } from 'lib/components/TextInputGroup'
import React from 'react'
import Link from 'next/link'
import { WalletInfo } from 'lib/components/WalletInfo'

export const DomainResolutionCard = (props) => {
  const { setDomainResolution, domainResolution } = props

  return (
    <Card>
      <InputLabel
        primary='Domain Resolution'
        description='This is the domain registered with the wallet you connected. Having your wallet address linked to a verifyed domain (e.g "mybrand.crypto") not only improves the user experience to avoid dealing with addresses that are hard to remember but also encourages others to trust the campaigns you create.'
        link_placeholder='Claim decentralized domain for my wallet.'
        link='https://unstoppabledomains.com'
      >
        <div className='flex flex-col sm:flex-row sm:mb-4'>
          <TextInputGroup
            containerClassName='w-full sm:w-full sm:mr-4'
            id='_domainName'
            label={`Your decentralized domain name`}
            placeholder='Decentralized domain not connected'
            // required
            // onChange={(e) => {
            //   setExistingDomainName(true)
            //   setDomainName(e.target.value)
            // }}
            // value={domainName}
          />
        </div>
      </InputLabel>
    </Card>
  )
}
