import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddColumnMenu from '../components/add-column-menu';
import * as sidemenu from '../actions/sidemenu';
import * as column from '../actions/column';
import * as addColumnMenu from '../actions/add-column-menu.js';

function mapStateToProps(state: State): Object {
  return {
    accounts: state.accounts.accounts,
    isOpen: state.sidemenu.isAddColumnMenuOpen,
  };
}

function mapDispatchToProps(dispatch: Dispatch): Object {
  return {
    close: bindActionCreators(sidemenu.closeAddColumnMenu, dispatch),
    onCreate: bindActionCreators(column.addColumn, dispatch),
    searchTweets: bindActionCreators(addColumnMenu.searchTweets, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddColumnMenu);
