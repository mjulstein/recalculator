export enum actionType {
  NA,
  ADD,
  SUB,
  DIV,
  MUL,
  MOD
}

export type historicAction = {action: actionType, value: number};
