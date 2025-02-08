import Image from 'next/image'

interface CardProps {
  icon: string | React.ReactNode
  title: string
  local: string
  startAt: string
  AndAt: string
  description?: string | undefined
  list?: string[] | undefined
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  local,
  startAt,
  AndAt,
  description,
  list
}: CardProps) => {
  return (
    <div className="bg-background-secondary p-4 border border-[#695e5e] rounded-lg w-full">
      <div className="flex gap-2">
        <div className="bg-[#2D2D2D] border border-[#3C3C3C] rounded p-[5px] h-fit">
          {typeof icon !== 'string' ? (
            icon
          ) : (
            <Image src={icon} height={20} width={20} alt="Icone do card" />
          )}
        </div>
        <div>
          <p className="text-lg font-semibold text-white-500 uppercase">{title}</p>
        </div>
      </div>

      <div className="mt-1 ml-10">
        <p className="text-sm ">
          {local && <span className="text-white-400">{local} • </span>}
          <span className="text-white-100">
            <span>
              {startAt} - {AndAt}{' '}
            </span>
            <span />
          </span>
        </p>
      </div>

      {list?.length ? (
        <ul className="list-disc text-white-400 mt-4 ml-7">
          {list?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-white-400 font-medium">{description}</p>
      )}
    </div>
  )
}

export default Card
