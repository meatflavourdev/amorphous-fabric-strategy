import ScaleLoader from '@bit/davidhu2000.react-spinners.scale-loader';

export default function Loader({ wsProvider }) {
  return (
    !wsProvider.synced ? (
      <></>
    ) : (
      <div className="loaderContainer">
        <ScaleLoader className="loader" height={90} width={10} color="#222222" />
      </div>
    )
  )
}
