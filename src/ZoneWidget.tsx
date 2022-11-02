import React from 'react';

type ZoneWidgetProps = {
    zoneType: string // | ...
}

class ZoneWidget extends React.Component<ZoneWidgetProps> {
    render() {
        return (
            <div className="zoneWidget">
                <div className="zoneFirst">
                    ВЫ НАХОДИТЕСЬ В ЗОНЕ
                </div>
                <div className="zoneSecond">
                    {this.props.zoneType}
                </div>
            </div>
        );
    }
}


export default ZoneWidget;