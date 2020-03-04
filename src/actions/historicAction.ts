export enum actionType {
  NA,
  ADD,
  SUB,
  DIV,
  MUL
};

export type historicAction = {action: actionType, value: number};
