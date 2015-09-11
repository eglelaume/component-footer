import React from 'react';
import List from '@economist/component-list';

function renderListContent(array) {
  return array.map(function renderListLink(item) {
    return <a className="ec-footer__link" {...item}>{item.text}</a>;
  });
}
function renderSocialListContent(array) {
  return array.map(function renderListLink(item) {
    return <a {...item} className="ec-footer__link ec-footer__link--icon">{item.text}</a>;
  });
}
export default class Footer extends React.Component {

  static get propTypes() {
    return {
      data: React.PropTypes.object,
      children: React.PropTypes.any,
    };
  }

  render() {
    const quote = {
      __html: 'Published since September 1843 to take part inspect "' +
        '<em>a severe contest between intelligence, which presses forward' +
        'and an unworthy, timing ignorance obstructing our progress.</em>',
      };

    const context = this.props.data;
    return (
      <footer className="ec-footer">
        <div className="ec-footer__menu">
          <div className="ec-footer__list ec-footer__list--subs">
            <List>
              {renderListContent(context.customer)}
            </List>
          </div>
          <div className="ec-footer__list ec-footer__list--social">
            <h4 className="ec-footer__header">Keep updated</h4>
            <List>
              {renderSocialListContent(context.social)}
            </List>
            <a className="ec-footer__link" href="https://economist.com">Subscribe to our Newsletter</a>
          </div>
          <div className="ec-footer__list ec-footer__list--economist">
            <List>
              {renderListContent(context.economist)}
            </List>
          </div>
        </div>
        <div>
          <p className="ec-footer__quote" dangerouslySetInnerHTML={ quote } />
        </div>
        <div className="ec-footer__footnote">
          <List className="ec-footer__list">
            {renderListContent(context.business)}
          </List>
          <p className="ec-footer__copyright">Copyright © The Economist Newspaper Limited 2005. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}
