import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

const steps = ["Placed", "Order Confirmed", "Shipped", 
               "Out for delivery", "Delivered"];

const OrderTracker = ({ activeStep }) => {
  return (
    <div className='w-full'>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel sx={{ color: "#9155FD", fontSize: "44px" }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracker;
