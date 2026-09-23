import { createSignal, For, type Component } from "solid-js";

type ToastType = "success" | "info" | "error" | "warning";

interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
}

const [toasts, setToasts] = createSignal<ToastItem[]>([]);

const removeToast = (id: string) => {
  setToasts((current) => current.filter((toast) => toast.id !== id));
};

const createToast = (message: string, type: ToastType) => {
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

  setToasts((current) => [...current, { id, message, type }]);
  window.setTimeout(() => removeToast(id), 4000);
};

export const toast = {
  success: (message: string) => createToast(message, "success"),
  info: (message: string) => createToast(message, "info"),
  error: (message: string) => createToast(message, "error"),
  warning: (message: string) => createToast(message, "warning"),
};

declare global {
  interface Window {
    toast: typeof toast;
  }
}

if (typeof window !== "undefined") {
  window.toast = toast;
}

const badgeClasses: Record<ToastType, string> = {
  success: "bg-success text-success-content",
  info: "bg-info text-info-content",
  error: "bg-error text-error-content",
  warning: "bg-warning text-warning-content",
};

export const Toaster: Component = () => (
  <div class="toast flex max-w-sm flex-col gap-3 px-2">
    <For each={toasts()}>
      {(item) => (
        <div
          class={`overflow-hidden rounded-2xl shadow-2xl shadow-slate-900/5 transition-all duration-200 ${badgeClasses[item.type]}`}
        >
          <div class="flex items-start gap-3 p-4">
            <div class="min-w-0 flex-1">
              <p class="text-sm leading-5">{item.message}</p>
            </div>
            <button
              type="button"
              class="cursor-pointer"
              onClick={(event) => {
                event.stopPropagation();
                removeToast(item.id);
              }}
              aria-label="Close toast"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </For>
  </div>
);
