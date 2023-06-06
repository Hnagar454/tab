import React, { Fragment } from 'react'
import "./my.css";
function Tab() {





  return (
    <Fragment>

      <h1 >How to create a tab with diffrent content</h1>
  <div className='table'>

  
<div className='tablelist'>

  <div className='tablehead' >Table head 1</div>
  <div className='tablehead'  >Table head 2</div>
  <div className='tablehead'  >Table head 3</div>

</div>


<div className='table-content'>  is good  city </div>
<div className='table-content' > city  </div>
<div className='table-content'>   city  </div>


  
</div>


    </Fragment>
  )
}

export default Tab
