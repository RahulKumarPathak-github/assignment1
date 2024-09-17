function getProcessingFee(paymentMethod) {
    let fee;
    
    switch (paymentMethod) {
      case "credit":
        fee = "2% processing fee";
        break;
      case "debit":
        fee = "1.5% processing fee";
        break;
      case "paypal":
        fee = "3% processing fee";
        break;
      default:
        fee = "Invalid payment method";
    }
    
    console.log(fee);
  }
  
  // Example usage
  getProcessingFee("credit");  // Output: 2% processing fee
  getProcessingFee("debit");   // Output: 1.5% processing fee
  getProcessingFee("paypal");  // Output: 3% processing fee
  getProcessingFee("bitcoin"); // Output: Invalid payment method