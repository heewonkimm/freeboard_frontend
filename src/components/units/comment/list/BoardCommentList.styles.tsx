import styled from '@emotion/styled';
import { Modal } from 'antd';

export const CommentList = styled.div`
  display: flex;
  border-bottom: 1px solid #bdbdbd;
  gap: 12px;
`;
export const AvatarWrap = styled.div`
  padding-top: 20px;
`;
export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px 0 20px 0;
`;
export const ComTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  font-size: 16px;
  color: #4f4f4f;
`;
export const ComBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  font-size: 16px;
`;
export const Right = styled.div`
  display: flex;
  gap: 8px;
`;
export const Writer = styled.div`
  color: #000;
  font-weight: 700;
`;
export const Star = styled.div``;
export const Edit = styled.div`
  cursor: pointer;
`;
export const Delete = styled.div`
  cursor: pointer;
`;
export const Contents = styled.div``;
export const CreateAt = styled.div`
  font-size: 12px;
  color: #bdbdbd;
`;

export const PasswordModal = styled(Modal)`
  color: blue;
`;

export const PasswordInput = styled.input`
  width: 100%;
`;
