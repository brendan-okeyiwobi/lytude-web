// stack-layouts.tsx
import React, { CSSProperties, HTMLAttributes } from "react";

type StackProps = {
    children: React.ReactNode;
    style?: CSSProperties;
    className?: string;
    gap?: string;
    justify?: CSSProperties["justifyContent"];
    align?: CSSProperties["alignItems"];
} & HTMLAttributes<HTMLDivElement>;

export function HStack({
    children,
    style = {},
    className = "",
    gap = "0px",
    justify = "flex-start",
    align = "center",
    ...props
}: StackProps) {
    const combinedStyle: CSSProperties = {
        display: "flex",
        flexDirection: "row",
        gap,
        justifyContent: justify,
        alignItems: align,
        ...style,
    };

    return (
        <div className={`hstack ${className}`} style={combinedStyle} {...props}>
            {children}
        </div>
    );
}

export function VStack({
    children,
    style = {},
    className = "",
    gap = "0px",
    justify = "flex-start",
    align = "center",
    ...props
}: StackProps) {
    const combinedStyle: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        gap,
        justifyContent: justify,
        alignItems: align,
        ...style,
    };

    return (
        <div className={`vstack ${className}`} style={combinedStyle} {...props}>
            {children}
        </div>
    );
}

type ZStackProps = {
    children: React.ReactNode;
    style?: CSSProperties;
    className?: string;
    justify?: CSSProperties["justifyContent"];
    align?: CSSProperties["alignItems"];
} & HTMLAttributes<HTMLDivElement>;

export function ZStack({
    children,
    style = {},
    className = "",
    justify = "center",
    align = "center",
    ...props
}: ZStackProps) {
    const combinedStyle: CSSProperties = {
        display: "grid",
        placeContent: `${align} ${justify}`,
        position: "relative",
        ...style,
    };

    return (
        <div className={`zstack ${className}`} style={combinedStyle} {...props}>
            {children}
        </div>
    );
}

export function Spacer() {
    return <div style={{ flex: 1 }} />;
}
