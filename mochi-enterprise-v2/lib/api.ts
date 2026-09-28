export type ApiResponse<T> = { data: T; error?: never } | { data?: never; error: string };

export async function api<T>(path: string, init?: RequestInit): Promise<ApiResponse<T>> {
  const response = await fetch(`/api${path}`, { ...init, headers: { "Content-Type": "application/json", ...(init?.headers || {}) } });
  if (!response.ok) return { error: await response.text() };
  return { data: await response.json() as T };
}