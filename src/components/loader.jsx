
const Loader = ({showText = true, ShowIcon = true}) => {
  return (
    <div className="flex items-center justify-center gap-2">
        <div className="size-6 animate-spin border border-b-2 border-blue-600 rounded-full" />
<span className="text-sm animate-pulse">Loading...</span>
        </div>
  )
}

export default Loader;     