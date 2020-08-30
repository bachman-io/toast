import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

function GTAOnline({ data }) {
  return (
    <Layout>
      <SEO title="Gaming: GTA Online" description="Fun stats and information from Collin's GTA Online shenanigans" />
      <div className="container">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item">Gaming</li>
                <li className="breadcrumb-item active" aria-current="page">GTA Online</li>
              </ol>
            </nav>
            <h1 className="display-1">GTA Online</h1>
            <h2>Updated at Least Once a Week</h2>
            <button type="button" className="btn btn-primary">
              <a
                href="https://docs.google.com/spreadsheets/d/1OfEJQjGGILU4P0A4W5OM49qULxSevWhxwCwMJWD2hU8/edit?usp=sharing"
                target="_blank"
                rel="nofollow noreferrer"
              >
                Source: Google Sheet
              </a>
            </button>
          </div>
        </div>
        <hr />
        <div className="row mb-5">
          <div className="col">
            <h2>Summary</h2>
            <p>
              Here&apos;s a quick overview of my GTA online account&apos;s current financial
              situation.
            </p>
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">Wish List Total Cost</th>
                  <td>
                    { data.cost.summaryAmount.toLocaleString(
                      'en-us',
                      { style: 'currency', currency: 'USD', minimumFractionDigits: 0 },
                    )}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Money in Bank</th>
                  <td>
                    { data.bank.summaryAmount.toLocaleString(
                      'en-us',
                      { style: 'currency', currency: 'USD', minimumFractionDigits: 0 },
                    )}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Money Left to Grind</th>
                  <td>
                    { data.grindcashleft.summaryAmount.toLocaleString(
                      'en-us',
                      { style: 'currency', currency: 'USD', minimumFractionDigits: 0 },
                    )}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Grind Money Per Day</th>
                  <td>
                    { data.grindcashday.summaryAmount.toLocaleString(
                      'en-us',
                      { style: 'currency', currency: 'USD', minimumFractionDigits: 0 },
                    )}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Grind Days Remaining</th>
                  <td>{ data.grinddays.summaryAmount }</td>
                </tr>
                <tr>
                  <th scope="row">Average Days to Grind Per Item</th>
                  <td>{ data.avggrind.summaryAmount }</td>
                </tr>
                <tr>
                  <th scope="row">Wish List Completion Date</th>
                  <td>{ new Date(data.finishdate.summaryDate).toLocaleDateString() }</td>
                </tr>
                <tr>
                  <th scope="row">Total Vehicle Value</th>
                  <td>
                    { data.vehicleworth.summaryAmount.toLocaleString(
                      'en-us',
                      { style: 'currency', currency: 'USD', minimumFractionDigits: 0 },
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <h2>Vehicles</h2>
            <p>These are all the vehicles I own in the game and their worth.</p>
            { data.vehicles.locations.map((l) => (
              <React.Fragment key={l.location}>
                <h3>{ l.location }</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Floor</th>
                      <th scope="col">Vehicle</th>
                      <th scope="col">Cost</th>
                      <th scope="col">More Info</th>
                    </tr>
                  </thead>
                  <tbody>
                    { l.nodes.map((v) => (
                      <tr key={v.vehicle}>
                        <td>{ v.floor }</td>
                        <td>{ v.vehicle }</td>
                        <td>
                          { v.cost.toLocaleString(
                            'en-us',
                            { style: 'currency', currency: 'USD', minimumFractionDigits: 0 },
                          )}
                        </td>
                        <td>
                          <a className="btn btn-sm btn-primary" href={v.gtaBaseLink} target="_blank" rel="nofollow noreferrer">GTA Base</a>
                          {' '}
                          <a className="btn btn-sm btn-primary" href={v.gtaWikiLink} target="_blank" rel="nofollow noreferrer">GTA Wiki</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <h2>Wish List</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Buy At</th>
                  <th scope="col">&nbsp;</th>
                  <th scope="col">Total</th>
                  <th scope="col">Remaining</th>
                </tr>
              </thead>
              <tbody>
                { data.wishlist.nodes.map((g) => (
                  <React.Fragment key={g.item}>
                    <tr>
                      <th scope="row" rowSpan="2">{ g.item }</th>
                      <td rowSpan="2">{ g.buyAt }</td>
                      <td><strong>Cost:</strong></td>
                      <td>
                        { g.cost.toLocaleString(
                          'en-us',
                          { style: 'currency', currency: 'USD', minimumFractionDigits: 0 },
                        )}
                      </td>
                      <td>
                        { g.moneyToGrind > 0 ? g.moneyToGrind.toLocaleString(
                          'en-us',
                          { style: 'currency', currency: 'USD', minimumFractionDigits: 0 },
                        ) : 0}
                      </td>
                    </tr>
                    <tr>
                      <td><strong>Grind Days: </strong></td>
                      <td>
                        { g.totalGrindDays }
                      </td>
                      <td>
                        { g.daysToGrind > 0 ? g.daysToGrind : 0 }
                      </td>
                    </tr>
                  </React.Fragment>
                )) }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default GTAOnline;

export const pageQuery = graphql`
query GTAQuery {
  wishlist: allGoogleSheetGameStatsGtaWishList(sort: {fields: daysToGrind, order: DESC}) {
    nodes {
      item
      buyAt
      cost
      daysToGrind
      totalGrindDays
      moneyToGrind
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
  avggrind: googleSheetGameStatsGtaSummary(summaryTitle: {eq: "Average Days to Grind"}) {
    summaryAmount
  }
  finishdate: googleSheetGameStatsGtaSummary(summaryTitle: {eq: "Wish List Completion Date"}) {
    summaryDate
  }
  vehicleworth: googleSheetGameStatsGtaSummary(summaryTitle: {eq: "Total Vehicle Value"}) {
    summaryAmount
  }
  vehicles: allGoogleSheetGameStatsGtaVehicles(sort: {fields: floor, order: ASC}) {
    locations: group(field: location) {
      location: fieldValue
      nodes {
        floor
        vehicle
        cost
        gtaWikiLink
        gtaBaseLink
      }
    }
  }
}

`;

GTAOnline.propTypes = {
  data: PropTypes.shape({
    wishlist: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
    cost: PropTypes.shape({
      summaryAmount: PropTypes.number.isRequired,
    }).isRequired,
    bank: PropTypes.shape({
      summaryAmount: PropTypes.number.isRequired,
    }).isRequired,
    grindcashleft: PropTypes.shape({
      summaryAmount: PropTypes.number.isRequired,
    }).isRequired,
    grindcashday: PropTypes.shape({
      summaryAmount: PropTypes.number.isRequired,
    }).isRequired,
    grinddays: PropTypes.shape({
      summaryAmount: PropTypes.number.isRequired,
    }).isRequired,
    avggrind: PropTypes.shape({
      summaryAmount: PropTypes.number.isRequired,
    }).isRequired,
    finishdate: PropTypes.shape({
      summaryDate: PropTypes.string.isRequired,
    }).isRequired,
    vehicleworth: PropTypes.shape({
      summaryAmount: PropTypes.number.isRequired,
    }).isRequired,
    vehicles: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  }).isRequired,
};
