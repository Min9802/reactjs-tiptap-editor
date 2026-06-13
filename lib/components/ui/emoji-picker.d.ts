import { EmojiPicker as EmojiPickerPrimitive } from 'frimousse';
import type * as React from 'react';
declare function EmojiPicker({ className, ...props }: React.ComponentProps<typeof EmojiPickerPrimitive.Root>): import("react/jsx-runtime").JSX.Element;
declare function EmojiPickerSearch({ className, ...props }: React.ComponentProps<typeof EmojiPickerPrimitive.Search>): import("react/jsx-runtime").JSX.Element;
declare function EmojiPickerContent({ className, ...props }: React.ComponentProps<typeof EmojiPickerPrimitive.Viewport>): import("react/jsx-runtime").JSX.Element;
declare function EmojiPickerFooter({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
export { EmojiPicker, EmojiPickerSearch, EmojiPickerContent, EmojiPickerFooter };
