import React from 'react';

export interface EKpiOneProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    backgroundColor?: string;
    color?: string;
}

export const KpiOne: React.FunctionComponent<EKpiOneProps> = (props) => {
    const { children, backgroundColor, color, style, title } = props;

    let _style: React.CSSProperties = style || {};

    /** Override Defaults */
    if (backgroundColor && _style) _style.backgroundColor = backgroundColor;
    if (color && _style) _style.color = color;

    return (
        <>
            <div style={_style} {...props}>
                {title}
                {children}
            </div>
        </>
    );
};
