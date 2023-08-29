export function getTextFromStatus(value: string): string {
  if (value === 'PENDING') {
    return 'Pendiente';
  } else {
    return 'Resuelta';
  }
}

export function getTextFromType(value: string): string {
  if (value === 'DOUBT') {
    return 'Duda';
  } else if (value === 'ORDER') {
    return 'Pedido';
  } else {
    return 'Integration';
  }
}

export function getTimeAgoMinutes(value: string): string {
  const today = new Date();
  const specificDate = new Date(value);
  const diffMs = today.getTime() - specificDate.getTime();
  const diffMins = Math.round(diffMs / 60000);
  return `Hace ${diffMins} min`;
}
