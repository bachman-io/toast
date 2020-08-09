import React from "react"
import { graphql } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

export const query = graphql`
query GTAQuery {
  gta_wishlist: allGoogleSheetGameStatsGtaWishList {
    nodes {
      item
      buyAt
      cost
      daysToGrind
    }
  }
  cost: googleSheetGameStatsGtaSummary(summaryTitle: {eq: "Total Cost"}) {
    summaryAmount
  }
  bank: googleSheetGameStatsGtaSummary(summaryTitle: {eq: "Money in Bank"}) {
    summaryAmount
  }
  grindcashleft: googleSheetGameStatsGtaSummary(summaryTitle: {eq: "Money Left to Grind"}) {
    summaryAmount
  }
  grindcashday: googleSheetGameStatsGtaSummary(summaryTitle: {eq: "Grind Money Per Day"}) {
    summaryAmount
  }
  grinddays: googleSheetGameStatsGtaSummary(summaryTitle: {eq: "Grind Days Remaining"}) {
    summaryAmount
  }
}

`

const GTAOnline = ({ data }) => (
    <Layout>
        <SEO title="Gaming: GTA Online" description="Fun stats and information from Collin's GTA Online shenanigans" />
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="display-1">GTA Online</h1>
                    <h2>Updated at Least Once a Week</h2>
                </div>
            </div>
            <hr />
            <div className="row mb-5">
                <div className="col">
                    <h2>Summary</h2>
                    <p>Here's a quick overview of my GTA online account's current financial situation.</p>
                    <table className="table">
                        <tr>
                            <th scope="row">Wish List Total Cost</th>
                            <td>{ data.cost.summaryAmount.toLocaleString(
                                'en-us',
                                { style: "currency", currency: "USD", minimumFractionDigits: 0 }
                            )}</td>
                        </tr>
                        <tr>
                            <th scope="row">Money in Bank</th>
                            <td>{ data.bank.summaryAmount.toLocaleString(
                                'en-us',
                                { style: "currency", currency: "USD", minimumFractionDigits: 0 }
                            )}</td>
                        </tr>
                        <tr>
                            <th scope="row">Money Left to Grind</th>
                            <td>{ data.grindcashleft.summaryAmount.toLocaleString(
                                'en-us',
                                { style: "currency", currency: "USD", minimumFractionDigits: 0 }
                            )}</td>
                        </tr>
                        <tr>
                            <th scope="row">Grind Money Per Day</th>
                            <td>{ data.grindcashday.summaryAmount.toLocaleString(
                                'en-us',
                                { style: "currency", currency: "USD", minimumFractionDigits: 0 }
                            )}</td>
                        </tr>
                        <tr>
                            <th scope="row">Grind Days Remaining</th>
                            <td>{ data.grinddays.summaryAmount }</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>Wish List</h2>
                    <p>If an item has a negative Days to Grind, it means I can afford it, but haven't bought it yet in favor of saving up for a different item.</p>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Buy At</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Days to Grind</th>
                        </tr>
                        </thead>
                        <tbody>
                        { data.gta_wishlist.nodes.map(g => (
                            <tr>
                                <th scope="row">{ g.item }</th>
                                <td>{ g.buyAt }</td>
                                <td>{ g.cost.toLocaleString(
                                    'en-us',
                                    { style: "currency", currency: "USD", minimumFractionDigits: 0 }
                                )
                                }</td>
                                <td>{ g.daysToGrind }</td>
                            </tr>
                        )) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </Layout>
)

export default GTAOnline