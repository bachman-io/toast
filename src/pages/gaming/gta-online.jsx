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
        <ul className="nav nav-tabs mb-3" id="gtaTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="summary-tab"
              data-toggle="tab"
              href="#summary"
              role="tab"
              aria-controls="summary"
              aria-selected="true"
            >
              Summary
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="properties-tab"
              data-toggle="tab"
              href="#properties"
              role="tab"
              aria-controls="properties"
              aria-selected="false"
            >
              Properties
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="vehicles-tab"
              data-toggle="tab"
              href="#vehicles"
              role="tab"
              aria-controls="vehicles"
              aria-selected="false"
            >
              Vehicles
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="wishlist-tab"
              data-toggle="tab"
              href="#wishlist"
              role="tab"
              aria-controls="wishlist"
              aria-selected="false"
            >
              Wish List
            </a>
          </li>
        </ul>
        <div className="tab-content" id="gtaTabContent">
          <div
            className="tab-pane fade show active"
            id="summary"
            role="tabpanel"
            aria-labelledby="summary-tab"
          >
            <p>
              Here&apos;s a quick overview of my GTA online account&apos;s current financial
              situation.
            </p>
            <h2>Money Breakdown</h2>
            <table className="table mb-5">
              <thead>
                <tr>
                  <th scope="col">&nbsp;</th>
                  <th scope="col">GTA Dollars</th>
                  <th scope="col">USD Value in Shark Cards</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Property Value</th>
                  <td>
                    { data.propertyworth.summaryAmount.toLocaleString(
                      'en-us',
                      { style: 'currency', currency: 'USD', minimumFractionDigits: 0 },
                    )}
                  </td>
                  <td>
                    { data.propertyworth.summarySharkCards.toLocaleString(
                      'en-us',
                      { style: 'currency', currency: 'USD', minimumFractionDigits: 0 },
                    )}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Vehicle Value</th>
                  <td>
                    { data.vehicleworth.summaryAmount.toLocaleString(
                      'en-us',
                      { style: 'currency', currency: 'USD', minimumFractionDigits: 0 },
                    )}
                  </td>
                  <td>
                    { data.vehicleworth.summarySharkCards.toLocaleString(
                      'en-us',
                      { style: 'currency', currency: 'USD', minimumFractionDigits: 0 },
                    )}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Total Account Value</th>
                  <td>
                    { data.totalworth.summaryAmount.toLocaleString(
                      'en-us',
                      { style: 'currency', currency: 'USD', minimumFractionDigits: 0 },
                    )}
                  </td>
                  <td>
                    { data.totalworth.summarySharkCards.toLocaleString(
                      'en-us',
                      { style: 'currency', currency: 'USD', minimumFractionDigits: 0 },
                    )}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Wish List Total Cost</th>
                  <td>
                    { data.cost.summaryAmount.toLocaleString(
                      'en-us',
                      { style: 'currency', currency: 'USD', minimumFractionDigits: 0 },
                    )}
                  </td>
                  <td>
                    { data.cost.summarySharkCards.toLocaleString(
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
                  <td>
                    { data.bank.summarySharkCards.toLocaleString(
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
                  <td>
                    { data.grindcashleft.summarySharkCards.toLocaleString(
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
                  <td>
                    { data.grindcashday.summarySharkCards.toLocaleString(
                      'en-us',
                      { style: 'currency', currency: 'USD', minimumFractionDigits: 0 },
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
            <h2>The Grind</h2>
            <table className="table mb-5">
              <tbody>
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
              </tbody>
            </table>
          </div>
          <div
            className="tab-pane fade"
            id="properties"
            role="tabpanel"
            aria-labelledby="properties-tab"
          >
            <p>These are all the properties I own in the game and their worth.</p>
            { data.properties.propertytypes.map((t) => (
              <React.Fragment key={t.propertytype}>
                <h3>{ t.propertytype }</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Property Name</th>
                      <th scope="col">Location</th>
                      <th scope="col">Cost</th>
                      <th scope="col">More Info</th>
                    </tr>
                  </thead>
                  <tbody>
                    { t.nodes.map((p) => (
                      <tr key={p.propertyName}>
                        <td>{ p.propertyName }</td>
                        <td>{ p.location }</td>
                        <td>
                          { p.cost.toLocaleString(
                            'en-us',
                            { style: 'currency', currency: 'USD', minimumFractionDigits: 0 },
                          )}
                        </td>
                        <td>
                          <a className="btn btn-sm btn-primary" href={p.gtaBaseLink} target="_blank" rel="nofollow noreferrer">GTA Base</a>
                          {' '}
                          <a className="btn btn-sm btn-primary" href={p.gtaWikiLink} target="_blank" rel="nofollow noreferrer">GTA Wiki</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </React.Fragment>
            ))}
          </div>
          <div
            className="tab-pane fade"
            id="vehicles"
            role="tabpanel"
            aria-labelledby="vehicles-tab"
          >
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
          <div
            className="tab-pane fade"
            id="wishlist"
            role="tabpanel"
            aria-labelledby="wishlist-tab"
          >
            <p>
              This is a list of all the things I want to buy in GTA Online. If something has a
              {' '}
              zero time/money remaining, it means I have enough GTA$ to buy it, but am waiting for a
              {' '}
              sale or am otherwise putting it off until my grinding is done (see Summary tab).
            </p>
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
  propertyworth: googleSheetGameStatsGtaSummary(summaryTitle: {eq: "Total Property Value"}) {
    summaryAmount
    summarySharkCards
  }
  vehicleworth: googleSheetGameStatsGtaSummary(summaryTitle: {eq: "Total Vehicle Value"}) {
    summaryAmount
    summarySharkCards
  }
  totalworth: googleSheetGameStatsGtaSummary(summaryTitle: {eq: "Total Account Value"}) {
    summaryAmount
    summarySharkCards
  }
  cost: googleSheetGameStatsGtaSummary(summaryTitle: {eq: "Total Wish List Cost"}) {
    summaryAmount
    summarySharkCards
  }
  bank: googleSheetGameStatsGtaSummary(summaryTitle: {eq: "Money in Bank"}) {
    summaryAmount
    summarySharkCards
  }
  grindcashleft: googleSheetGameStatsGtaSummary(summaryTitle: {eq: "Money Left to Grind"}) {
    summaryAmount
    summarySharkCards
  }
  grindcashday: googleSheetGameStatsGtaSummary(summaryTitle: {eq: "Grind Money Per Day"}) {
    summaryAmount
    summarySharkCards
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
  properties: allGoogleSheetGameStatsGtaProperties(sort: {fields: propertyName, order: ASC}) {
    propertytypes: group(field: propertyType) {
      propertytype: fieldValue
      nodes {
        propertyName
        location
        cost
        gtaWikiLink
        gtaBaseLink
      }
    }
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
}

`;

GTAOnline.propTypes = {
  data: PropTypes.shape({
    propertyworth: PropTypes.shape({
      summaryAmount: PropTypes.number.isRequired,
      summarySharkCards: PropTypes.number.isRequired,
    }).isRequired,
    vehicleworth: PropTypes.shape({
      summaryAmount: PropTypes.number.isRequired,
      summarySharkCards: PropTypes.number.isRequired,
    }).isRequired,
    totalworth: PropTypes.shape({
      summaryAmount: PropTypes.number.isRequired,
      summarySharkCards: PropTypes.number.isRequired,
    }).isRequired,
    cost: PropTypes.shape({
      summaryAmount: PropTypes.number.isRequired,
      summarySharkCards: PropTypes.number.isRequired,
    }).isRequired,
    bank: PropTypes.shape({
      summaryAmount: PropTypes.number.isRequired,
      summarySharkCards: PropTypes.number.isRequired,
    }).isRequired,
    grindcashleft: PropTypes.shape({
      summaryAmount: PropTypes.number.isRequired,
      summarySharkCards: PropTypes.number.isRequired,
    }).isRequired,
    grindcashday: PropTypes.shape({
      summaryAmount: PropTypes.number.isRequired,
      summarySharkCards: PropTypes.number.isRequired,
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
    vehicles: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
    properties: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
    wishlist: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
};
