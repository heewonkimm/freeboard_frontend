import { IQuery } from "../../../../../src/commons/types/generated/types";
import { MouseEvent } from "react";


export interface IBoardDetailUIProps {
    data?: Pick<IQuery, "fetchBoard">
    onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void
    onClickList: () => void
    onClickMoveEdit: () => void
}
