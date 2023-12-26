import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FC } from 'react';

type IToastProps = {
  message: string;
  type: string;
  id?: string | number;
};

const Toast: FC<IToastProps> = ({ type = 'success', message, id = 0 }) => {
  toast.configure({
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
    hideProgressBar: false,
    containerId: id,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    style: { whiteSpace: 'pre-line', wordBreak: 'break-all' },
  });

  if (!toast.isActive(id)) {
    toast.dismiss();
    toast(message, {
      theme: 'colored',
      type,
    });
  }

  return null;
};

export { Toast };
