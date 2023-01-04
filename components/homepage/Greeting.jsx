export function Greeting() {
  let headingColorClass =
    'bg-gradient-to-r from-yellow-600 to-red-600 dark:bg-gradient-to-l dark:from-emerald-500 dark:to-lime-600'

  return (
    <div
      className={`mb-8 bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent ${headingColorClass} md:text-7xl md:leading-[86px]`}
    >
      Howdy, fellow! <i className="twa twa-waving-hand"></i>
    </div>
  )
}
