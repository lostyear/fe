import en from '../packages/locales/en';
export default {
  ...en,
  'menu.mon.dashboard': 'Dashboard',
  'menu.mon.dashboard.realTime': 'Dashboard',
  'menu.mon.dashboard.screen': 'Screen',
  'menu.mon.dashboard.bigScreen': 'Big screen',
  'menu.mon.dashboard.srm': 'Fireplate',
  'menu.mon.strategy': 'Strategy',
  'menu.mon.strategy.strategy': 'Alarm strategy',
  'menu.mon.strategy.silence': 'Alarm silence',
  'menu.mon.strategy.aggrStra': 'Aggr stra',
  'menu.mon.strategy.collect': 'Collect',
  'menu.mon.strategy.nginx': 'Nginx log computing',
  'menu.mon.strategy.binlog': 'Binlog log computing',
  'menu.mon.history': 'History',
  'menu.mon.history.cur': 'Current',
  'menu.mon.history.all': 'All',
  'menu.mon.network': 'Network Monitor',
  'menu.mon.network.api': 'API Monitor',
  'menu.mon.network.snmp': 'SNMP Monitor',
  'menu.mon.srm': 'Fireplate',
  'menu.mon.collect': 'Collect',
  'menu.mon.collect.port': 'Port',
  'menu.mon.collect.proc': 'Proc',
  'menu.mon.collect.plugin': 'Plugin',
  'menu.mon.collect.log': 'Log',
  'menu.mon.collect.snmp': 'SNMP',
  'menu.mon.collect.api': 'API',
  'menu.mon.shortcuts': 'Shortcuts',
  'menu.mon.shortcuts.rdb': 'RDB',
  'menu.mon.shortcuts.ams': 'AMS',
  'menu.mon.shortcuts.job': 'JOB',
  'menu.mon.logCalc': 'Log computing',
  'menu.mon.logCalc.nginx': 'Nginx log computing',
  'menu.mon.logCalc.binlog': 'Binlog log computing',


  'node.select.help': 'Please select a node',

  '周一': 'Mon.',
  '周二': 'Tue.',
  '周三': 'Wed.',
  '周四': 'Thu.',
  '周五': 'Fri.',
  '周六': 'Sat.',
  '周日': 'Sun.',

  'clone.to.other.node': 'Clone to other node',
  'collect.log': 'Log',
  'collect.port': 'Port',
  'collect.proc': 'Proc',
  'collect.common.name': 'Name',
  'collect.common.node': 'Node',
  'collect.common.step': 'Step',
  'collect.common.step.unit': 'seconds',
  'collect.common.note': 'Note',

  'collect.log.msg.pattern.empty': 'Pattern is required',
  'collect.log.msg.log.empty': 'Log is required',
  'collect.log.ns': 'NS',
  'collect.log.name': 'Name',
  'collect.log.func': 'Calc func',
  'collect.log.func.cnt': 'Count',
  'collect.log.func.avg': 'Average',
  'collect.log.func.sum': 'Sum',
  'collect.log.func.max': 'Max',
  'collect.log.func.min': 'Min',
  'collect.log.path': 'Path',
  'collect.log.path.dynamic': 'dynamic log',
  'collect.log.path.dynamic.tip.1': 'The time format at the end of the log, eg.',
  'collect.log.path.dynamic.tip.2': "/ cannot be included in $'{}'",
  'collect.log.timeFmt': 'Time format',
  'collect.log.timeFmt.help.1': 'The time format must be the same as the format in the log.',
  'collect.log.timeFmt.help.2': 'Only the first match result is used.',
  'collect.log.step': 'Step',
  'collect.log.step.unit': 'seconds',
  'collect.log.pattern': 'Pattern',
  'collect.log.pattern.tip.1': 'Please Enter regular expression',
  'collect.log.pattern.tip.3': 'eg. cost=(\\d+) , Take \\d+ (the default is the first bracket)',
  'collect.log.tagval.placeholder': 'Not a curve value! Must be enumerable!',
  'collect.log.tags.add': 'Add tag',
  'collect.log.tagName.help.title': 'tagName description',
  'collect.log.tagName.help.1': 'Not allowed to use host, trigger, include',
  'collect.log.tagName.help.2': 'Not allowed to include = , : @',
  'collect.log.tagValue.help.title': 'tagValue description',
  'collect.log.tagValue.help.1': 'Must include parentheses. and the content is used as the value of tagValue, and must be enumerable.',
  'collect.log.tagValue.help.2': 'Not allowed to include = , : @',
  'collect.log.check': 'Check',
  'collect.log.check.btn': 'Check',
  'collect.log.check.btn2': 'Is there a problem with my configuration?',
  'collect.log.check.help': 'Enter a complete log to be monitored, including time.',
  'collect.log.check.help.tip.1': 'The correct: ',
  'collect.log.check.help.tip.2': 'Output regular, tag match result complete and sub-items, and time matching results',
  'collect.log.check.help.tip.3': 'The wrong: ',
  'collect.log.check.help.tip.4': 'Output error message',
  'collect.log.check.add.tip': 'Please check, When adding',
  'collect.log.note': 'Note',
  'collect.batch.import': 'Import',
  'collect.batch.export': 'Export',

  'collect.port.title': 'Metric',
  'collect.port.name.placeholder': 'Description of the collection, such as web port',
  'collect.port.pattern.msg': 'Only english, numbers, -_.',
  'collect.port.port': 'Port',
  'collect.port.timeout': 'Timeout',
  'collect.port.timeout.unit': 'seconds',

  'collect.proc.title': 'Metric',
  'collect.proc.name.placeholder': 'Description of the collection, such as nginx',
  'collect.proc.service.pattern.msg': 'Only english, numbers, -_.',
  'collect.proc.type': 'Type',
  'collect.proc.type.cmd': 'Command',
  'collect.proc.type.name': 'Process Name',
  'collect.proc.type.input.pattern.msg': 'Cannot contain Chinese',

  'collect.plugin': 'Plugin',
  'collect.plugin.name.placeholder': 'Description of the collection',
  'collect.plugin.filepath': 'FilePath',
  'collect.plugin.params': 'Params',
  'collect.plugin.filepath.placeholder': 'The absolute path of the plugin',
  'collect.plugin.env': 'ENV',

  'graph.subscribe': 'Subscribe',
  'graph.share': 'Share',
  'graph.clear': 'Clear',
  'graph.view': 'View',
  'graph.save': 'Save',
  'graph.machine.list.title': 'Machines',
  'graph.machine.list.update': 'Update graphs',
  'graph.metric.list.title': 'Metrics',
  'graph.metric.list.search': 'Search',
  'graph.metric.list.all': 'All',
  'graph.refresh': 'Refresh',
  'graph.config.title': 'Setting',
  'graph.config.graph.title': 'title',
  'graph.config.node': 'node',
  'graph.config.metric': 'metric',
  'graph.config.aggr': 'aggr',
  'graph.config.aggr.sum': 'sum',
  'graph.config.aggr.avg': 'avg',
  'graph.config.aggr.max': 'max',
  'graph.config.aggr.min': 'min',
  'graph.config.aggr.group': 'groupBy',
  'graph.config.comparison': 'comparison',
  'graph.config.series': 'series',
  'graph.config.series.unit': 'pcs',
  'graph.config.cate': 'cate',
  'graph.config.time': 'time',
  'graph.config.threshold': 'threshold',
  'graph.config.link': 'link',
  'graph.config.link.help': 'custom link',
  'graph.config.chartType.targetValue': 'value',
  'graph.config.chartType.current': 'current',
  'graph.config.chartType.unit': 'unit',
  'graph.config.chartType.subType': 'type',
  'graph.config.subType.normal': 'value',
  'graph.config.subType.normal.tip': '(aggr required)',
  'graph.config.subType.solidGauge': 'solidGauge',
  'graph.config.subType.liquidFillGauge': 'liquidFillGauge',
  'graph.config.chartType.valueMap': 'mapType',
  'graph.config.chartType.mapConf': 'map',
  'graph.config.chartType.tableType': 'table',
  'graph.config.chartType.tableType.current': 'current',
  'graph.config.chartType.tableType.stats': 'stats',
  'graph.config.chartType.pieType': 'type',
  'graph.config.chartType.pieType.pie': 'Pie',
  'graph.config.chartType.pieType.donut': 'Donut',
  'graph.config.chartType.tableType.columnsKey': 'columns',
  'graph.config.tagkv.node': 'node',

  'event.tab.alert': 'Alarming',
  'event.tab.all': 'History',
  'event.msg.ignore.success': 'Successfully ignore',
  'event.msg.claim.success': 'Successfully claim',
  'event.msg.claim.all.success': 'Successfully claim all',
  'event.table.time': 'Time',
  'event.table.stra': 'Stra',
  'event.table.node': 'Node',
  'event.table.priority': 'Priority',
  'event.table.notify': 'Notify result',
  'event.table.ignore': 'Ignore',
  'event.table.ignore.sure': 'Are you sure to ignore this alarm?',
  'event.table.claim': 'Claim',
  'event.table.claim.sure': 'Are you sure to claim this alarm?',
  'event.table.shield': 'Shield',
  'event.table.assignees': 'Assignees',
  'event.table.status': 'Status',
  'event.table.status.alert': 'alert',
  'event.table.status.recovery': 'recovery',
  'event.table.claim.all': 'Claim all',
  'event.table.claim.all.sure': 'Are you sure to claim all unrecovered alarms?',
  'event.table.detail.title': 'Detail',
  'event.table.metric': 'Metric',
  'event.table.expression': 'Expression',
  'event.table.scene': 'Scene',
  'event.table.scene.time': 'Time',
  'event.table.scene.value': 'Value',
  'event.table.runbook': 'Runbook',

  'screen.create': 'Add',
  'screen.tag.add': 'Add tag',
  'screen.tag.batch.modify': 'Batch modify',
  'screen.auto.refresh': 'Auto refresh',
  'screen.col': 'col',
  'screen.tag.graph.add': 'Add graph',
  'screen.tag.graph.add.graph': 'Graph',
  'screen.tag.graph.add.number': 'Number (aggr required)',
  'screen.tag.graph.add.table': 'Table',
  'screen.tag.graph.add.pie': 'Pie',
  'screen.tag.up': 'Up',
  'screen.tag.down': 'Down',
  'screen.tag.batch.modify.tag': 'Active tag',
  'screen.tag.batch.modify.target.node': 'Target node',
  'screen.tag.batch.modify.target.screen': 'Target screen',
  'screen.graph.extraMoreList.share': 'share',
  'screen.graph.extraMoreList.clone': 'clone',
  'screen.graph.extraMoreList.delete': 'delete',
  'screen.graph.extraMoreList.delete.sure': 'Are you sure to delete this chart?',
  'screen.clone.name': 'New name',
  'screen.clone.node': 'New node',
  'screen.clone.node.help': 'The cloned screen create a chart based on the current node',

  'silence.add': 'Add',
  'silence.metric': 'Metric',
  'silence.bindNode': 'Node',
  'silence.time': 'Time',
  'silence.cause': 'Cause',
  'silence.user': 'User',
  'silence.delete': 'Delete',
  'silence.form.metric': 'Metric',
  'silence.form.endpoints': 'Endpoints',
  'silence.form.tags': 'Tags',
  'silence.form.stime': 'Start time',
  'silence.form.etime': 'End time',
  'silence.cause.default': 'Quick shielding',

  'stra.add': 'Add',
  'stra.advanced': 'Advanced',
  'stra.seconds': 's',
  'stra.minutes': 'min',
  'stra.name': 'Name',
  'stra.priority': 'Priority',
  'stra.metric': 'Metric',
  'stra.notify': 'Notify',
  'stra.batch.modify.excludeNs': 'Modify excluded nodes',
  'stra.batch.modify.notify': 'Modify notify',
  'stra.batch.cloneTo.otherNode': 'Clone to other node',
  'stra.batch.delete': 'Delete',
  'stra.batch.import': 'Import',
  'stra.batch.export': 'Export',
  'stra.node': 'Node',
  'stra.node.exclude': 'Excluded nodes',
  'stra.priority.1': 'P1',
  'stra.priority.2': 'P2',
  'stra.priority.3': 'P3',
  'stra.priority.1.tip': 'P1: Phone, SMS, IM, Email',
  'stra.priority.2.tip': 'P2: SMS, IM, Email',
  'stra.priority.3.tip': 'P3: IM, Email',
  'stra.alertDur': 'Alert duration',
  'stra.trigger': 'Trigger condition',
  'stra.trigger.normal': 'Normal',
  'stra.trigger.and': 'And',
  'stra.preview': 'Preview',
  'stra.preview.duration': 'duration',
  'stra.preview.all': 'each value',
  'stra.preview.happen': 'value',
  'stra.preview.nodata': 'no data',
  'stra.preview.max': 'max',
  'stra.preview.min': 'min',
  'stra.preview.avg': 'avg',
  'stra.preview.sum': 'sum',
  'stra.preview.all.help': 'The disconnection situation is discontinuous. To increase fault tolerance, you can choose happen',
  'stra.tag': 'Tag filter',
  'stra.nodeTag': 'Node Tag filter',
  'stra.tag.add': 'Add tag filter',
  'stra.tag.modify': 'Modify tag filter',
  'stra.tag.include': 'include',
  'stra.tag.exclude': 'exclude',
  'stra.action': 'Action',
  'stra.action.d1': 'in',
  'stra.action.d2': 'min',
  'stra.action.d3': 'maximum alarm',
  'stra.action.d4': 'times',
  'stra.notify.team': 'Notify teams',
  'stra.notify.user': 'Notify users',
  'stra.notify.msg.error': 'Must be an alarm receiver or receiving group',
  'stra.notify.callback': 'Notify me of the system I developed (alarm callback, please confirm that it is an address accessible in IDC)',
  'stra.recovery.dur': 'Recovery duration',
  'stra.recovery.dur.help.1': 'Recovered, it will continue to observe for',
  'stra.recovery.dur.help.2': 'seconds, and the recovery notification is sent only when the alarm is not triggered again.',
  'stra.recovery.notify': 'Recovery notify',
  'stra.recovery.notify.checkbox': 'Do not send recovery notifications',
  'stra.period.time': 'Period time',
  'stra.alert.upgrade': 'Alert upgrade',
  'stra.alert.upgrade.checkbox': 'ON',
  'stra.alert.upgrade.d1': 'duration',
  'stra.alert.upgrade.d2': 'unprocessed and unrecovered continuous alarm',
  'stra.alert.upgrade.d3': 'will be use',
  'stra.alert.upgrade.d4': 'send to',
  'stra.runbook': 'Runbook',
  'stra.work_groups': 'Work groups',

  'api.name': 'Name',
  'api.url': 'URL',
  'api.viewGraph': 'Open graph',
  'api.alarm': 'Setup alarm',
  'api.batch.viewGraph': 'Batch open graphs',
  'api.batch.alarm': 'Batch setup alarms',
  'api.title': 'Metric',
  'api.protocol': 'Protocol',
  'api.domain': 'Domain',
  'api.port': 'Port',
  'api.path': 'Path',
  'api.header.add': 'Add header',
  'api.expected_code': 'HTTP status code',
  'api.expected_string': 'Expected string',
  'api.unexpected_string': 'Unexpected string',
  'api.timeout': 'Timeout',
  'api.interval': 'Interval',
  'api.region': 'Region',
  'api.comment': 'Comment',

  'snmp.oid_type': 'Collect type',
  'snmp.oid_type.1': 'common',
  'snmp.oid_type.2': 'other',
  'snmp.module': 'Module',
  'snmp.metric': 'Metric',
  'snmp.oid': 'oid',
  'snmp.metric_type': 'Metric type',
  'snmp.indexes': 'Indexes',
  'snmp.indexes.add': 'Add index',

  'host.is.related': 'Type',
  'host.related': 'Hosts',
  'host.unRelated': 'Non-hosts',

  'aggrStra.add.title': 'Add metrics calc',
  'aggrStra.modify.title': 'Modify metrics calc',
  'aggrStra.add.btn': 'Add',
  'aggrStra.batch.delete.btn': 'Batch delete',
  'aggrStra.node': 'Node',
  'aggrStra.node.inherit': 'Inherit',
  'aggrStra.metric': 'Metric',
  'aggrStra.status': 'Status',
  'aggrStra.lastUser': 'Last user',
  'aggrStra.updated': 'Updated',
  'aggrStra.modify.target.node': 'Please go to the {node} node to modify',
  'aggrStra.delete.target.node': 'Please go to the {node} node to delete',
  'aggrStra.settings.node': 'Node',
  'aggrStra.settings.excl_nodes': 'Exclude nodes',
  'aggrStra.settings.category': 'Type',
  'aggrStra.settings.category.1': 'Hosts',
  'aggrStra.settings.category.2': 'Non-hosts',
  'aggrStra.settings.originMetric': 'Original metric settings',
  'aggrStra.settings.originMetric.add': 'Add',
  'aggrStra.settings.originMetric.delete': 'Delete',
  'aggrStra.settings.originMetric.name': 'Name',
  'aggrStra.settings.originMetric.opt': 'Operation',
  'aggrStra.settings.originMetric.tags': 'Tag filter',
  'aggrStra.settings.originMetric.tags.key': 'Tag key',
  'aggrStra.settings.originMetric.tags.opt.include': 'Include',
  'aggrStra.settings.originMetric.tags.opt.exclude': 'Exclude',
  'aggrStra.settings.originMetric.tags.value': 'Tag value',
  'aggrStra.settings.originMetric.tags.add': 'Add tag',
  'aggrStra.settings.aggr': 'Aggr settings',
  'aggrStra.settings.aggr.groupby': 'GroupBy',
  'aggrStra.settings.newMetric': 'New Metric',
  'aggrStra.settings.expression': 'Expression',
  'aggrStra.settings.expression.help.1': 'Please use $a, $b, $c to indicate the original metric',
  'aggrStra.settings.expression.help.2': 'Support + - * / ()',
  'aggrStra.settings.expression.help.3': 'For example：1-$a/$b'
};
