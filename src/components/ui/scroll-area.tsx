"use client";

import { cn } from "@/lib/utils";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import type { ComponentProps } from "react";

const ScrollArea = ({
	className,
	children,
	ref,
	...props
}: ComponentProps<typeof ScrollAreaPrimitive.Root>) => (
	<ScrollAreaPrimitive.Root
		ref={ref}
		className={cn("relative overflow-hidden", className)}
		{...props}
	>
		<ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit] [&>*:first-child]:h-full">
			{children}
		</ScrollAreaPrimitive.Viewport>
		<ScrollBar />
		<ScrollAreaPrimitive.Corner />
	</ScrollAreaPrimitive.Root>
);

const ScrollBar = ({
	className,
	orientation = "vertical",
	ref,
	...props
}: ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) => (
	<ScrollAreaPrimitive.ScrollAreaScrollbar
		ref={ref}
		orientation={orientation}
		className={cn(
			"flex touch-none select-none transition-colors",
			orientation === "vertical" &&
				"h-full w-2.5 border-l border-l-transparent p-[1px]",
			orientation === "horizontal" &&
				"h-2.5 flex-col border-t border-t-transparent p-[1px]",
			className,
		)}
		{...props}
	>
		<ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
	</ScrollAreaPrimitive.ScrollAreaScrollbar>
);

export { ScrollArea, ScrollBar };
