import React from "react"
import { graphql } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

export const query = graphql`
query GTAQuery {
  gta: allGoogleSheetGameStatsGtaWishList {
    nodes {
      item
      buyAt
      cost
      daysToGrind
      summaryTitle
      summaryAmount
      id
    }
  }
}
`

const GTAOnline = ({ data }) => (
    <Layout>
        <SEO title="Gaming: GTA Online" />
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="display-1">GTA Online</h1>
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
                            <td>{ data.gta.nodes[0].summaryAmount.toLocaleString(
                                'en-us',
                                { style: "currency", currency: "USD", minimumFractionDigits: 0 }
                            )}</td>
                        </tr>
                        <tr>
                            <th scope="row">Money in Bank</th>
                            <td>{ data.gta.nodes[1].summaryAmount.toLocaleString(
                                'en-us',
                                { style: "currency", currency: "USD", minimumFractionDigits: 0 }
                            )}</td>
                        </tr>
                        <tr>
                            <th scope="row">Money Left to Grind</th>
                            <td>{ data.gta.nodes[2].summaryAmount.toLocaleString(
                                'en-us',
                                { style: "currency", currency: "USD", minimumFractionDigits: 0 }
                            )}</td>
                        </tr>
                        <tr>
                            <th scope="row">Grind Money Per Day</th>
                            <td>{ data.gta.nodes[3].summaryAmount.toLocaleString(
                                'en-us',
                                { style: "currency", currency: "USD", minimumFractionDigits: 0 }
                            )}</td>
                        </tr>
                        <tr>
                            <th scope="row">Grind Days Remaining</th>
                            <td>{ data.gta.nodes[4].summaryAmount }</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>Wish List</h2>
                    <p>This list is automatically updated daily. If an item has a negative Days to Grind, it means I can afford it, but haven't bought it yet in favor of saving up for a different item.</p>
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
                        { data.gta.nodes.map(g => (
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