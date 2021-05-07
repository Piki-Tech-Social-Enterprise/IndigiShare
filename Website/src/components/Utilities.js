import withReactContent from 'sweetalert2-react-content';

const isEmptyString = value => value === '';
const isNullOrEmpty = value => value == null || isEmptyString(value);
const isEmailValid = email => !isNullOrEmpty(email) && email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
const INITIAL_CUSTOMSWAL_OPTIONS = {
  buttonsStyling: false,
  backdrop: 'rgba(0, 0, 0, 0.85)',
  customClass: {
    popup: 'bg-pumahara',
    title: 'text-pumahara',
    content: 'z-index-2',
    input: 'form-control',
    confirmButton: 'btn btn-gradient text-uppercase mx-3 col-4',
    cancelButton: 'btn btn-danger text-uppercase mx-3 col-4'
  }
};
const customSwalMixin = async props => {
  const {
    default: Swal
  } = await import(/* webpackPrefetch: true, webpackChunkName: 'vendors-sweetalert2' */'sweetalert2/dist/sweetalert2.all');
  const reactSwal = withReactContent(Swal);
  return reactSwal.mixin(props);
};
const customSwal = async props => {
  const reactSwal = await customSwalMixin(INITIAL_CUSTOMSWAL_OPTIONS);
  return reactSwal.fire({
    ...INITIAL_CUSTOMSWAL_OPTIONS,
    ...props
  });
};

export {
  isEmptyString,
  isNullOrEmpty,
  isEmailValid,
  customSwalMixin,
  customSwal,
}
