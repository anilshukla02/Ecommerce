import React from 'react'
import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate=useNavigate();

    return (
        <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>

            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>

                <Grid item xs={6}>

                    <div className='flex cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/s/w/u/xxl-patta-print-long-nofilter-original-imagqy7mbun3bzg5.jpeg?q=70&crop=true"
                            alt="" />
                            <div className='ml-5 space-y-2'>
                                <p className=''>Men Printed Cotton Blend Straight Kurta  (Yellow, Brown, Orange)</p>
                                <p className='opacity-50 text-xs font-semibold'>Size:M </p>
                                <p className='opacity-50 text-xs font-semibold'>Color: Black </p>
                            </div>
                    </div>

                </Grid>

<Grid item xs={2}>
<p>INR 1099</p>
</Grid>

<Grid item xs={4}>
{true && <div>
<p>
<AdjustIcon sx={{width:"15px", height:"15px" }} className='text-green-600 mr-2 text-sm'/>
<span>
    Deliveted on March'24
</span>
</p>
<p className='text-xs'>
    Your item Has been Delivered
</p>

</div>}

{false && <p>
<span>
    Expected Delivery on March'24
</span>

</p>}


</Grid>




            </Grid>
        </div>
    )
}

export default OrderCard
