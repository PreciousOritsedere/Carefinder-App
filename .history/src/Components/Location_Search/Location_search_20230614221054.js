import React from 'react'
import styles from './Location _search.module.css'
import Input from '@/Components/common/Input'

function Location_search() {
  return (
    <section className={styles.container}>
    <form>
    <div>
        <label htmlFor="location">My location</label>
        <Input type="text" id="location" placeholder="Enter your location" />
        <> Experience the peace of mind that comes from knowing that medical help
          is just a <span>click</span> away.
        </p>
    </div>


    </form>

    </section>
  )
}

export default Location_search