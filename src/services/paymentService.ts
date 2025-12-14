// Ethiopian Payment Integration Service
// Supports: Chapa, Telebirr, and other Ethiopian payment methods

export interface PaymentRequest {
  amount: number;
  currency: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  description: string;
  returnUrl: string;
}

export interface PaymentResponse {
  status: string;
  message: string;
  data?: {
    checkout_url?: string;
    transaction_id?: string;
  };
}

// Chapa Payment Integration
export const chapaPayment = async (request: PaymentRequest): Promise<PaymentResponse> => {
  try {
    // Demo mode - in production, use real Chapa API
    const chapaPublicKey = 'CHAPUBK_TEST';
    
    const payload = {
      amount: request.amount,
      currency: request.currency || 'ETB',
      email: request.email,
      first_name: request.firstName,
      last_name: request.lastName,
      phone_number: request.phone,
      tx_ref: `humsj-${Date.now()}`,
      callback_url: request.returnUrl,
      return_url: request.returnUrl,
      customization: {
        title: 'HUMSJ Charity Donation',
        description: request.description,
      },
    };

    // In production, make actual API call to Chapa
    // const response = await fetch('https://api.chapa.co/v1/transaction/initialize', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${chapaPublicKey}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(payload),
    // });

    // Demo response
    return {
      status: 'success',
      message: 'Payment initialized successfully',
      data: {
        checkout_url: `https://checkout.chapa.co/checkout/${payload.tx_ref}`,
        transaction_id: payload.tx_ref,
      },
    };
  } catch (error) {
    console.error('Chapa payment error:', error);
    return {
      status: 'error',
      message: 'Payment initialization failed',
    };
  }
};

// Telebirr Payment Integration
export const telebirrPayment = async (request: PaymentRequest): Promise<PaymentResponse> => {
  try {
    // Demo mode - in production, use real Telebirr API
    const telebirrMerchantId = 'DEMO_MERCHANT';

    const payload = {
      merchant_id: telebirrMerchantId,
      amount: request.amount,
      currency: request.currency || 'ETB',
      customer_email: request.email,
      customer_phone: request.phone,
      customer_name: `${request.firstName} ${request.lastName}`,
      order_id: `humsj-${Date.now()}`,
      description: request.description,
      return_url: request.returnUrl,
    };

    // In production, make actual API call to Telebirr
    // const response = await fetch('https://api.telebirr.com/v1/payment/initialize', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${telebirrMerchantId}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(payload),
    // });

    // Demo response
    return {
      status: 'success',
      message: 'Telebirr payment initialized',
      data: {
        checkout_url: `https://telebirr.com/checkout/${payload.order_id}`,
        transaction_id: payload.order_id,
      },
    };
  } catch (error) {
    console.error('Telebirr payment error:', error);
    return {
      status: 'error',
      message: 'Telebirr payment initialization failed',
    };
  }
};

// Bank Transfer Information (for manual donations)
export const getBankTransferInfo = () => {
  return {
    bankName: 'Commercial Bank of Ethiopia',
    accountName: 'HUMSJ Charity',
    accountNumber: '1000123456789',
    swiftCode: 'CBETETAA',
    currency: 'ETB',
  };
};

// Mobile Money (Ethio Telecom)
export const getMobileMoneyInfo = () => {
  return {
    provider: 'Ethio Telecom',
    accountNumber: '*144#',
    description: 'Dial *144# to access mobile money services',
  };
};

// Process donation
export const processDonation = async (
  amount: number,
  paymentMethod: 'chapa' | 'telebirr' | 'bank' | 'mobile',
  donorInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  }
): Promise<PaymentResponse> => {
  const request: PaymentRequest = {
    amount,
    currency: 'ETB',
    email: donorInfo.email,
    phone: donorInfo.phone,
    firstName: donorInfo.firstName,
    lastName: donorInfo.lastName,
    description: 'Donation to HUMSJ Charity',
    returnUrl: `${window.location.origin}/donation-success`,
  };

  switch (paymentMethod) {
    case 'chapa':
      return chapaPayment(request);
    case 'telebirr':
      return telebirrPayment(request);
    case 'bank':
      return {
        status: 'success',
        message: 'Bank transfer information provided',
        data: getBankTransferInfo() as any,
      };
    case 'mobile':
      return {
        status: 'success',
        message: 'Mobile money information provided',
        data: getMobileMoneyInfo() as any,
      };
    default:
      return {
        status: 'error',
        message: 'Invalid payment method',
      };
  }
};
