const position = { x: 0, y: 0 };
const data = {
    layoutNodes: [
        {
            id: "1",
            type: "source",
            data: {
                title: "Source",
                description: "Automations Database contacts",
                stats: {
                    started: 0,
                },
            },
            _position: {
                x: 380.00037444075423,
                y: 0,
            },
            style: {
                width: 250,
            },
            target_position: "top",
            source_position: "bottom",
            position,
        },
        {
            id: "3",
            type: "waitThenCheck",
            data: {
                title: "Wait then Check",
                description: "Check behaviour of the contacts.",
                stats: {
                    running: 17,
                },
            },
            _position: {
                x: 380.00030212384667,
                y: 372,
            },
            style: {
                width: 250,
            },
            target_position: "top",
            source_position: "bottom",
            position,
        },
        {
            id: "5",
            type: "sms",
            data: {
                title: "SMS",
                description: "Send SMS to contacts.",
                stats: {
                    running: 14,
                },
            },
            _position: {
                x: 0.0006895893374535293,
                y: 1246,
            },
            target_position: "top",
            source_position: "bottom",
            position,
        },
        {
            id: "6",
            type: "empty",
            data: {},
            _position: {
                x: 380.00084311022334,
                y: 1376,
            },
            height: 6,
            mergeNodeOfParentId: "3",
            target_position: "top",
            source_position: "bottom",
            position,
        },
        {
            id: "7",
            type: "end",
            data: {
                title: "End",
                description: "Automation ends.",
                stats: {
                    completed: 14,
                },
            },
            _position: {
                x: 380.0000154657833,
                y: 1432,
            },
            target_position: "top",
            source_position: "bottom",
            position,
        },
        {
            id: "848c3dec-1b01-4a3f-8b72-706d66a8cd70",
            type: "sms",
            data: {
                title: "Sms",
                description: "Send sms to contacts.",
            },
            _position: {
                x: 530.0003565002155,
                y: 502,
            },
            target_position: "top",
            source_position: "bottom",
            position,
        },
        {
            id: "b288f125-ff39-466d-bab6-934c2fa07c03",
            type: "waitThenCheck",
            data: {
                title: "New Rule",
                description: "Check behaviour of the Rule",
            },
            _position: {
                x: 530.000649770617,
                y: 632,
            },
            target_position: "top",
            source_position: "bottom",
            position,
        },
        {
            id: "7301b7b0-eaba-49dc-bf57-0c5fec2b192f",
            type: "empty",
            data: {},
            _position: {
                x: 380.000880810274,
                y: 1134,
            },
            height: 6,
            target_position: "top",
            source_position: "bottom",
            position,
        },
        {
            id: "977c989f-9657-41e6-9617-08bd3c6fbd43",
            type: "empty",
            data: {},
            _position: {
                x: 760.0009293479523,
                y: 1134,
            },
            height: 6,
            target_position: "top",
            source_position: "bottom",
            position,
        },
        {
            id: "316366e7-8c56-49c9-9803-5c30d937634e",
            type: "empty",
            data: {},
            _position: {
                x: 530.0002802883737,
                y: 1190,
            },
            height: 6,
            target_position: "top",
            source_position: "bottom",
            position,
        },
        {
            id: "78919ba2-5f9e-4d1a-b729-444a738ea1f5",
            type: "sms",
            data: {
                title: "Sms",
                description: "Send sms to contacts.",
            },
            _position: {
                x: 530.0009417226739,
                y: 1246,
            },
            target_position: "top",
            source_position: "bottom",
            position,
        },
        {
            id: "571a5ddf-f865-486b-9374-0196e842a9f9",
            type: "waitThenCheck",
            data: {
                title: "New Rule",
                description: "Check behaviour of the Rule",
            },
            _position: {
                x: 380.0009084120236,
                y: 762,
            },
            target_position: "top",
            source_position: "bottom",
            position,
        },
        {
            id: "8c804560-48f1-47fd-9937-bc62124b8de4",
            type: "empty",
            data: {},
            _position: {
                x: 230.00023449374996,
                y: 1022,
            },
            height: 6,
            target_position: "top",
            source_position: "bottom",
            position,
        },
        {
            id: "3d4f48ac-1dc7-4aff-8739-15659058e878",
            type: "empty",
            data: {},
            _position: {
                x: 530.0000020924601,
                y: 1022,
            },
            height: 6,
            target_position: "top",
            source_position: "bottom",
            position,
        },
        {
            id: "d7651a34-9478-409a-a38c-64312d73e8d3",
            type: "empty",
            data: {},
            _position: {
                x: 380.0006605416041,
                y: 1078,
            },
            height: 6,
            target_position: "top",
            source_position: "bottom",
            position,
        },
        {
            id: "4acdd729-39b9-42ce-adfe-a8d1068f821a",
            type: "sms",
            data: {
                title: "Sms",
                description: "Send sms to contacts.",
            },
            _position: {
                x: 530.0004075241991,
                y: 892,
            },
            target_position: "top",
            source_position: "bottom",
            position,
        },
        {
            id: "e70a497c-1b42-4f9f-b92c-c4d6b1cc5d57",
            type: "sms",
            data: {
                title: "Sms",
                description: "Send sms to contacts.",
            },
            _position: {
                x: 230.00060068647215,
                y: 892,
            },
            target_position: "top",
            source_position: "bottom",
            position,
        },
        {
            id: "528ba05d-9c5b-413e-a59f-7ca6914020c4",
            type: "waitThenCheck",
            data: {
                title: "New Rule",
                description: "Check behaviour of the Rule",
            },
            _position: {
                x: 380.0001113668592,
                y: 130,
            },
            target_position: "top",
            source_position: "bottom",
            position,
        },
        {
            id: "cd485fbb-3d6f-4015-8717-822d3c433725",
            type: "empty",
            data: {},
            _position: {
                x: 230.00041223048268,
                y: 260,
            },
            height: 6,
            target_position: "top",
            source_position: "bottom",
            position,
        },
        {
            id: "8f37b5f7-9cea-4085-89c9-bfa7db971e17",
            type: "empty",
            data: {},
            _position: {
                x: 530.0006256305971,
                y: 260,
            },
            height: 6,
            target_position: "top",
            source_position: "bottom",
            position,
        },
        {
            id: "2202a162-e008-4653-ab23-1b780c839a26",
            type: "empty",
            data: {},
            _position: {
                x: 380.0006922939385,
                y: 316,
            },
            height: 6,
            target_position: "top",
            source_position: "bottom",
            position,
        },
    ],
    layoutEdges: [
        {
            id: "e3-4",
            source: "3",
            target: "848c3dec-1b01-4a3f-8b72-706d66a8cd70",
            type: "condition",
            data: {
                title: "Default condition",
                disabled: true,
            },
        },
        {
            id: "e3-5",
            source: "3",
            target: "5",
            type: "condition",
            data: {
                title: "Editable branch",
            },
        },
        {
            id: "e5-6",
            source: "5",
            target: "6",
            type: "condition",
            data: {},
        },
        {
            id: "e6-7",
            source: "6",
            target: "7",
            type: "condition",
            data: {},
        },
        {
            id: "53706f28-e86a-4687-8e4e-9c41b0ab4cbc",
            source: "b288f125-ff39-466d-bab6-934c2fa07c03",
            target: "571a5ddf-f865-486b-9374-0196e842a9f9",
            type: "condition",
            data: {},
        },
        {
            id: "6a5ea441-efa8-45a5-a0a5-e89ea942a714",
            source: "7301b7b0-eaba-49dc-bf57-0c5fec2b192f",
            target: "316366e7-8c56-49c9-9803-5c30d937634e",
            type: "condition",
            data: {
                isAddButtonHidden: true,
            },
        },
        {
            id: "047285c3-4f2c-4d2d-b7e5-34be0cd03cd8",
            source: "b288f125-ff39-466d-bab6-934c2fa07c03",
            target: "977c989f-9657-41e6-9617-08bd3c6fbd43",
            type: "condition",
            data: {},
        },
        {
            id: "ebd9bc4f-d5c9-47d5-b667-548c9f63ed35",
            source: "977c989f-9657-41e6-9617-08bd3c6fbd43",
            target: "316366e7-8c56-49c9-9803-5c30d937634e",
            type: "condition",
            data: {
                isAddButtonHidden: true,
            },
        },
        {
            id: "c1f453c1-0d79-4bdd-bb3e-4995b43851c9",
            source: "316366e7-8c56-49c9-9803-5c30d937634e",
            target: "78919ba2-5f9e-4d1a-b729-444a738ea1f5",
            type: "condition",
            data: {},
            mergeNodeOfParentId: "b288f125-ff39-466d-bab6-934c2fa07c03",
        },
        {
            id: "3ce6e537-8efe-491c-bd67-bd8dd2c22453",
            source: "78919ba2-5f9e-4d1a-b729-444a738ea1f5",
            target: "6",
            type: "condition",
            data: {},
        },
        {
            id: "2178e8ad-4da2-43b5-95fd-d7b8e813bb99",
            source: "8c804560-48f1-47fd-9937-bc62124b8de4",
            target: "d7651a34-9478-409a-a38c-64312d73e8d3",
            type: "condition",
            data: {
                isAddButtonHidden: true,
            },
        },
        {
            id: "e6d0ce27-60c3-4fa9-a855-78d3eaf8e653",
            source: "571a5ddf-f865-486b-9374-0196e842a9f9",
            target: "4acdd729-39b9-42ce-adfe-a8d1068f821a",
            type: "condition",
            data: {},
        },
        {
            id: "1b2e68f6-cada-45a6-9333-4d25bc3ec018",
            source: "3d4f48ac-1dc7-4aff-8739-15659058e878",
            target: "d7651a34-9478-409a-a38c-64312d73e8d3",
            type: "condition",
            data: {
                isAddButtonHidden: true,
            },
        },
        {
            id: "fe2db513-d113-468e-b884-2be2385f0c74",
            source: "d7651a34-9478-409a-a38c-64312d73e8d3",
            target: "7301b7b0-eaba-49dc-bf57-0c5fec2b192f",
            type: "condition",
            data: {},
            mergeNodeOfParentId: "571a5ddf-f865-486b-9374-0196e842a9f9",
        },
        {
            id: "07773a27-04d1-470b-b7e0-36911475aece",
            source: "4acdd729-39b9-42ce-adfe-a8d1068f821a",
            target: "3d4f48ac-1dc7-4aff-8739-15659058e878",
            type: "condition",
            data: {},
        },
        {
            id: "726de0f3-6c82-41a6-af03-c5ee43eaf195",
            source: "e70a497c-1b42-4f9f-b92c-c4d6b1cc5d57",
            target: "8c804560-48f1-47fd-9937-bc62124b8de4",
            type: "condition",
            data: {},
        },
        {
            id: "e1-2",
            source: "1",
            target: "528ba05d-9c5b-413e-a59f-7ca6914020c4",
            type: "condition",
            data: {},
        },
        {
            id: "9ef8742a-2d31-44bc-abbe-137ce9bdee57",
            source: "848c3dec-1b01-4a3f-8b72-706d66a8cd70",
            target: "b288f125-ff39-466d-bab6-934c2fa07c03",
            type: "condition",
            data: {},
        },
        {
            id: "d3db8ba7-c6e6-4ac2-b024-be2b04468de4",
            source: "571a5ddf-f865-486b-9374-0196e842a9f9",
            target: "e70a497c-1b42-4f9f-b92c-c4d6b1cc5d57",
            type: "condition",
            data: {},
        },
        {
            id: "d5693be9-7995-4b97-831f-928a9de65cdd",
            source: "528ba05d-9c5b-413e-a59f-7ca6914020c4",
            target: "cd485fbb-3d6f-4015-8717-822d3c433725",
            type: "condition",
            data: {},
        },
        {
            id: "d21e4de4-b3f2-47ca-a597-cfcb94151f3b",
            source: "cd485fbb-3d6f-4015-8717-822d3c433725",
            target: "2202a162-e008-4653-ab23-1b780c839a26",
            type: "condition",
            data: {
                isAddButtonHidden: true,
            },
        },
        {
            id: "d535bd4f-8e24-4530-9499-db8d220a7267",
            source: "528ba05d-9c5b-413e-a59f-7ca6914020c4",
            target: "8f37b5f7-9cea-4085-89c9-bfa7db971e17",
            type: "condition",
            data: {},
        },
        {
            id: "68d0415b-959d-42f3-be7e-9e70b4611929",
            source: "8f37b5f7-9cea-4085-89c9-bfa7db971e17",
            target: "2202a162-e008-4653-ab23-1b780c839a26",
            type: "condition",
            data: {
                isAddButtonHidden: true,
            },
        },
        {
            id: "383b4cf8-e73f-416d-93e6-753f5f14d0cb",
            source: "2202a162-e008-4653-ab23-1b780c839a26",
            target: "3",
            type: "condition",
            data: {},
            mergeNodeOfParentId: "528ba05d-9c5b-413e-a59f-7ca6914020c4",
        },
    ],
};
const initialElements = [...data.layoutNodes, ...data.layoutEdges];
export { initialElements };
