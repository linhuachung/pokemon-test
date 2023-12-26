import { Methods, TYPE_METHODS } from '@/helpers/method';
import { MESSAGE_ERROR, MESSAGE_SUCCESS } from '@/constant/message';
import { TOAST_STATUS } from '@/components/Toast/dataToast';
import { Toast } from '@/components';

interface CallAPIOptions {
  method: keyof TYPE_METHODS;
  url: string;
  data?: any;
  onRequest?: () => void;
  // eslint-disable-next-line no-unused-vars
  onSuccess?: (response: any) => void;
  onFinally?: () => void;
  // eslint-disable-next-line no-unused-vars
  onFailed?: (error: any) => void;
  textSuccess?: string;
  isShowNotification?: boolean;
}

export const callAPI = async (options: CallAPIOptions): Promise<any> => {
  const {
    method = 'get',
    url,
    data = null,
    onRequest = () => {},
    onSuccess = () => {},
    onFinally = () => {},
    onFailed = () => {},
    textSuccess,
    isShowNotification = true,
  } = options;

  onRequest();

  try {
    const response = await Methods[method](url, data);
    onSuccess(response);
    if (textSuccess && isShowNotification) {
      Toast({ message: MESSAGE_SUCCESS['OK'], type: TOAST_STATUS.success });
    }
    return response;
  } catch (error: any) {
    console.log(error);
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.href = '/login';
    }
    onFailed(error.response?.data);

    if (isShowNotification) {
      Toast({
        message:
          MESSAGE_ERROR[error.response?.status] || error.response?.status,
        type: TOAST_STATUS.error,
      });
    }

    throw new Error(error.response?.data?.message || 'Unknown error occurred');
  } finally {
    onFinally();
  }
};

export default callAPI;
