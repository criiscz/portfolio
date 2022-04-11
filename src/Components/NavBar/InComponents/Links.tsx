export default function Links({children}:any) {
  return (
    <div className={"links right-32 absolute flex gap-5 font-display font-semibold"}>
      {children}
    </div>
  )
}