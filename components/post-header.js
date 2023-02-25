import styles from 'styles/styles.module.scss'
import ConvertDate from 'components/convert-date'

// import styles from 'styles/post-header.module.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faClock } from '@fortawesome/free-regular-svg-icons'

export default function PostHeader({
    title,
    publish = ''
  }) {
  return (
    <div>
      <h1>{title}</h1>
      {publish && (
        <div>
          {/* <FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" /> */}
          <ConvertDate dateISO={publish} />
        </div>
      )}
    </div>
  )
}
